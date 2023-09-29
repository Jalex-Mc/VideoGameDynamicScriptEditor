// const useOnClickListener = () => {
//     const onClick = (event) => {
//         console.log("This works and event is ", event);
//     };

//     return {onClick};
// };

export function testListener() {
    return (event) => {
        console.log("please", event);
    }
}