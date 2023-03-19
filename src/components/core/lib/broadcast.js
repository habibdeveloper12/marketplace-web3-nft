let Broadcast;

if (typeof BroadcastChannel !== 'undefined') {
  Broadcast = BroadcastChannel;
} else {
  const broadcastScopes = {};

  Broadcast = function (scope) {
    this.scope = scope;
    this.onmessage = null;
    broadcastScopes[scope] = broadcastScopes[scope] || [];
    broadcastScopes[scope].push(this);
  };

  Broadcast.prototype.close = function () {
    broadcastScopes[this.scope] = broadcastScopes[this.scope].filter((bc) => bc !== this);
    this.onmessage = null;
    this.scope = null;
  };

  Broadcast.prototype.postMessage = function (data) {
    broadcastScopes[this.scope].forEach((bc) => {
      if (bc !== this && bc.onmessage) {
        bc.onmessage({ data });
      }
    });
  };
}

export const broadcast = (name) => new Broadcast(name);
