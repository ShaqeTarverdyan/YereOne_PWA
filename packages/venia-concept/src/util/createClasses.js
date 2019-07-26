export default function (content, classes) {
    Object.keys(classes).forEach(key => {
        console.log(key, classes[key]);
        content = content.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), 'g'), classes[key]);
    });
    return content;
}
