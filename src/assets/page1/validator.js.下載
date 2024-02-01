const validator = {
    //#region 數字 相關的 驗證
    number: {
        /// <summary>
        /// 範圍值(非數字一律清空)
        /// </summary>
        /// <param name="input" type="String">輸入內容</param>
        /// <param name="maxNum" type="Int">最大值</param>
        /// <param name="minNum" type="String">最小值(預設0)</param>
        /// <returns>String</returns>
        range: data = (input, maxNum, minNum = 0) => {
            const intValue = parseInt(input, 10);

            if (isNaN(intValue)) {
                return ''; // 清空非數字輸入
            } else if (intValue < minNum) {
                return `${minNum}`; // 低於範圍的數字設為minNum
            } else if (intValue > maxNum) {
                return `${maxNum}`; // 超過範圍的數字設為maxNum
            } else {
                return `${intValue}`; // 在範圍內的數字保持原樣
            }
        }
        ,
    },
    //#endregion

    //#region 日期 相關的 驗證
    date: {
        /// <summary>
        /// 西元年yyyy(非法一律清空)
        /// </summary>
        /// <param name="input" type="String">輸入內容</param>
        /// <returns>String</returns>
        yyyy: data = input => {
            const regex = /^[0-9]{4}$/;
            return regex.test(input) ? input : "";
        },

        /// <summary>
        /// 民國年yyy(非法一律清空)
        /// </summary>
        /// <param name="input" type="String">輸入內容</param>
        /// <returns>String</returns>
        yyy: data = input => {
            const regex = /^(0?[1-9]|[1-9][0-9]|[1-9][0-9]{2})$/;
            if (regex.test(input)) {
                return parseInt(input) <= moment().year() - 1911 ? input : "";
            } else {
                return "";
            }
        },

        /// <summary>
        /// 日期mmdd(非法一律清空)
        /// </summary>
        /// <param name="input" type="String">輸入內容</param>
        /// <returns>String</returns>
        mmdd: data = input => {
            const firstRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
            if (firstRegex.test(input)) {
                const d = moment().year() + "-" + input;
                const dateRegex = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;

                return dateRegex.test(d) ? input : "";
            } else {
                return "";
            }
        },
    },
    //#endregion
}