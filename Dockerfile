FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat git
WORKDIR /app
COPY package.json ./ 
RUN npm cache clean --force
RUN npm install --force

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
#ok done
FROM node:16-alpine AS runner 
WORKDIR /app
ENV NODE_ENV production
#ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3005

ENV PORT 3005

CMD ["node_modules/.bin/next", "start"]
