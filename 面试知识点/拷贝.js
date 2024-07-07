function deepCopy(object) {
  if (!object || typeof object !== "object") return;

  let newObject = Array.isArray(object) ? [] : {};
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    newObject[key] =
      typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
  }

  return newObject;
}