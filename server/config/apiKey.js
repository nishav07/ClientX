import crypto from 'crypto';

export function generateApiKey() {
  const raw = 'cX_live_' + crypto.randomBytes(32).toString('hex');
  // raw = "ak_live_a3f9c2b1..." — ye sirf ek baar dikhao owner ko
  
  const hash = crypto.createHash('sha256').update(raw).digest('hex');
  const prefix = raw.substring(0, 12); // "ak_live_a3f9"
  
  console.log("raw",raw)
  console.log("hash",hash)
  console.log("prefix",prefix)
  return { raw, hash, prefix };
}


export function verifyKey(userRawKey,dbHashKey,){
  const hash = crypto.createHash('sha256').update(userRawKey).digest('hex');

  if(hash === dbHashKey){
    return true
  } else {
    false
  }
7
}
