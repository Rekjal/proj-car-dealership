import _ from "lodash";

export function paginate (arrayOfItems, pageNumber, pageSize) {
    const startIndex = (pageNumber-1)*pageSize; //formula for calcualting starting index
    return _(arrayOfItems).slice(startIndex).take(pageSize).value();
}