
export function planRowContact (data) {
    return `
        <tr class="item" id="tr-${data._id}"> 
            <td class="tb_row th_check">
                <input type="checkbox" name="" class="input-check" id="check-${data._id}">
            </td>
            <td class="tb_row column">
                <div class="row_contact">
                    <span>${data.name} ${data.lastname}</span>
                    <span>${data.email}</span>
                </div>
            </td>
            <td class="tb_row column">
                <div class="row_region">
                    <span>${data.country}</span>
                    <span>${data.region}</span>
                </div>
            </td>
            <td class="tb_row column">${data.company}</td>
            <td class="tb_row column">${data.position}</td>
            <td class="tb_row column">
                <div class="row_interest">
                    <span>${data.interest}%</span>
                </div>
            </td>
            <td class="tb_row column" >
                <button class="btn-edit" id="btn-${data._id}">Editar</button>
            </td>
        </tr>
    `
}

