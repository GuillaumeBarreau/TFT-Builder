import base64url from "base64url";

export const convertBoardToUrl = (board) => {
    
    const convertObjectToString = JSON.stringify(board);
    console.log(convertObjectToString);
    
    const converBase64url = base64url(convertObjectToString);
    
    return converBase64url;
};

export const convertUrlToObject = (str) => {
    
    const convertBase64urlToObject = base64url.decode(str);
    const convertToString = JSON.parse(convertBase64urlToObject);
    
    return convertToString;
};