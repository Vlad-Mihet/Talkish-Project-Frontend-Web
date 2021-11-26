/**
 * classLister
 * Returns the stringified list of classes to use as a className.
 * 
 * @param styleObject 
 * @returns {string} classesString
 */

function classLister(styleObject: {
  readonly [key: string]: string;
}) {
  return (...classList: string[]): string => {
    return classList.reduce(
      // Reduce the list of string to a single className
      // Which will be stored in classesString which starts from ""
      (list: string, className: string) => {
        let classesString: string | false | undefined = list;
        if (className && styleObject[className]) {
          // If we have any more class name to add
          // we'll append it to `classesString` after appending " "
          if (list) {
            classesString += " ";
          }
          classesString += styleObject[className];
        }
        return classesString;
      }, ""
    );
  }
}

export default classLister;