//local storage
export function getItem(key, defaultValue){
    let value = localStorage.getItem(key);
    if (value){
        value = JSON.parse(value);
        return value;
    }
    return defaultValue;
}

export function setItem(key, value){
    value = JSON.stringify(value);
    localStorage.setItem(key,value);
}

export function removeItem(key){
    localStorage.removeItem(key);
    window.location.reload();
}

//session storage
export function getSessionItem(key, defaultValue){
    let value = sessionStorage.getItem(key);
    if (value){
        value = JSON.parse(value);
        return value;
    }
    return defaultValue;
}

export function setSessionItem(key, value){
    value = JSON.stringify(value);
    sessionStorage.setItem(key,value);
}

export function removeSessionItem(key){
    localStorage.removeItem(key);
}

//Clear all storage
export function clearAll(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();

}