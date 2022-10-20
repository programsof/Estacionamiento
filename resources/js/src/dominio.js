export const dominio = {
    url: "http://127.0.0.1:8000"
  };
  
  export function SearchPermissions(permissions, name) {
    const search = permissions.find((i) => i.name == name);
  
    if (typeof search === "undefined") {
      return false;
    }
  
    return true;
  }
  