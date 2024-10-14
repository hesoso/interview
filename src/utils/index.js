export const downloadPDF = (url, onProgress) => {
    const list = url.split('/');
    const fileName = list[list.length - 1];
    
    fetch(url)
        .then(response => {
            const contentLength = response.headers.get('content-length');
            if (!contentLength) {
                throw new Error('无法获取文件大小');
            }

            const total = parseInt(contentLength, 10);
            let loaded = 0;

            const reader = response.body.getReader();
            const chunks = [];

            // 逐步读取数据块
            return reader.read().then(function processChunk({ done, value }) {
                if (done) {
                    return new Blob(chunks);
                }

                chunks.push(value);
                loaded += value.length;

                // 计算进度百分比并回调
                if (onProgress) {
                    onProgress(Math.round((loaded / total) * 100));
                }

                // 继续读取
                return reader.read().then(processChunk);
            });
        })
        .then(blob => {
            // 下载文件
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
};
