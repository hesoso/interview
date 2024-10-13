export const downloadPDF = (url) => {
    const list = url.split('/')
    const fileName = list[list.length - 1]
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            const objectUrl = URL.createObjectURL(blob);
            link.href = objectUrl;
            link.download = fileName; // 指定下载的文件名
            document.body.appendChild(link); // 添加到文档中
            link.click(); // 触发点击
            document.body.removeChild(link); // 下载完后移除
            URL.revokeObjectURL(objectUrl); // 释放 URL
        })
        .catch(err => console.error('Error fetching the PDF:', err));
}