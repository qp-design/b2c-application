import {post as e, get as t} from "@brushes/request";

export {postFormData} from "@brushes/request";
import {get as r, omit as s} from "lodash-es";

const a = new Map, o = "clearIoCache-true", n = (e, t, n = {}) => {
    const c = r(n, "needCache", !1), i = s(n, ["needCache"]) || {};
    if (!c) return e(t, i);
    if (n.hasOwnProperty(o)) return void (e => {
      for (let t of a) {
        const [r] = t;
        if (r.includes(e)) {
          a.delete(r);
          break
        }
      }
    })(t);
    const f = t + JSON.stringify(i), l = () => {
      a.set(f, {callback: e(t, i), time: (new Date).valueOf()})
    };
    a.has(f) || l();
    const {callback: u, time: h} = a.get(f);
    return h + 1e3 * c * 60 < (new Date).valueOf() ? (l(), e(t, i)) : u
  }, c = e => e({[o]: !0}), i = (e = {}, t = 3) => Object.assign(e, {needCache: t}), f = (t, r = {}) => n(e, t, r),
  l = (e, r = {}) => n(t, e, r);
export {i as cacheParams, l as get, f as post, c as removeRequestCacheByKey, a as requestCache};
