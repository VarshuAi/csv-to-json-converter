
            window.parseCSV = function() {
                const csv = document.getElementById('csv-inp').value.trim();
                const out = document.getElementById('csv-json-out');
                if(!csv) return;
                const lines = csv.split('\n');
                const headers = lines[0].split(',');
                let list = [];
                for(let i=1; i<lines.length; i++) {
                    const cols = lines[i].split(',');
                    let obj = {};
                    headers.forEach((h, idx) => {
                        obj[h.trim()] = cols[idx] ? cols[idx].trim() : '';
                    });
                    list.push(obj);
                }
                out.value = JSON.stringify(list, null, 2);
            }
            parseCSV();
        