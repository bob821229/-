const myAxios = axios.create({
    baseURL: '/',
    //baseURL: '/Triwra/'
    //baseURL: '/Lab/'
})

const postManAxios = axios.create({
    baseURL: 'https://2589427d-d568-4e90-b1cb-68f943f85758.mock.pstmn.io'
    //baseURL: 'https://b404747a-feb7-4540-9b7d-b485e8c0ee57.mock.pstmn.io'    
    //baseURL: 'https://3a2b6d32-900e-4bcd-9297-fa54d1168571.mock.pstmn.io/'
    //baseURL: 'https://1bcf893c-d3bc-4419-9d2e-a7a0acfc3235.mock.pstmn.io'    
})

// 設定請求配置
const config = {
    headers: {
        'Origin': 'http://localhost:50987', // 設定前端應用程式的來源
        'Access-Control-Allow-Origin': '*', // 設定CORS標頭（這僅在前端使用代理伺服器時需要）
    },
};

const api = {
    //#region Home 相關的 api
    RainfallSituation: {
        /// <summary>
        /// 取得最後更新日期
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetLastUpdate: data => myAxios.post('/RainfallSituation/GetLastUpdate', data),

        /// <summary>
        /// 取得未來兩周雨量
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetFutureWeekGridRainfall: data => myAxios.post('/RainfallSituation/GetFutureWeekGridRainfall', data),

        /// <summary>
        /// 取得未來兩周雨量(表格)
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetFutureWeekforecastRainfallTable: data => myAxios.post('/RainfallSituation/GetFutureWeekforecastRainfallTable', data)
        
    },
    //#endregion

    //#region Home 相關的 api
    Home: {
        /// <summary>
        /// 取得埤塘蓄水DashBoard
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetDashBoardPoundInfo: data => myAxios.post('/Home/GetDashBoardPoundInfo', data),

        /// <summary>
        /// 取得乾旱監測DashBoard
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetDashBoardvsSPIData: data => myAxios.post('/Home/GetDashBoardvsSPIData', data),

        /// <summary>
        /// 取得耕作情勢DashBoard
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetDashBoardvsIrrigData: data => myAxios.post('/Home/GetDashBoardvsIrrigData', data),

        /// <summary>
        /// 取得降雨情勢DashBoard
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetDashBoardIrrigRainfallData: data => myAxios.post('/Home/GetDashBoardIrrigRainfallData', data),

        /// <summary>
        /// 取得水庫水情DashBoard
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetDashBoardReservoirInfo: data => myAxios.post('/Home/GetDashBoardReservoirInfo', data),
    },
    //#endregion

    //#region WaterOperation 相關的 api
    WaterOperation: {
        //依水庫編號取回 供灌缺水風險評估值
        GetReservoirInflowToRisk: data => myAxios.post('/WaterOperation/GetReservoirInflowToRisk', data),

        //依水庫取回各情境風險值
        GetContextualContent: data => myAxios.post('/WaterOperation/GetContextualContent', data),

        //依水庫、年度取回停灌區域及面積
        GetPlannedAreaAndJudgmentAreaData: data => myAxios.post('/WaterOperation/GetPlannedAreaAndJudgmentAreaData', data),

        //依水庫取回 判釋區域年度值
        GetJudgmentAreaYears: data => myAxios.post('/WaterOperation/GetJudgmentAreaYears', data),

        /// <summary>
        /// 取得可進行配水模擬的灌區
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        //GetIrrigationZone: data => postManAxios.post('/WaterOperation/GetIrrigationZone', data),
        GetIrrigationZone: data => myAxios.post('/WaterOperation/GetIrrigationZone', data),

        /// <summary>
        /// 取得給水量下拉選項
        /// </summary>
        /// <param name="IrrigationZone" type="String">區域</param>
        /// <returns>Json</returns>
        GetAmountWaterList: (data, config) => myAxios.post('/WaterOperation/GetAmountWaterList', data, config),

        /// <summary>
        /// 取得指定灌區的配水模擬路線
        /// </summary>
        /// <param name="IANo" type="String">所屬灌區</param>
        /// <param name="IrrigationAmount" type="String">給水量</param>
        /// <returns>Json</returns>
        //GetWaterOperationData: data => postManAxios.post('/WaterOperation/GetWaterOperationData', data),
        GetWaterOperationData: data => myAxios.post('/WaterOperation/GetWaterOperationData', data),

        /// <summary>
        /// 取得指定灌區的配水模擬路線(圖)
        /// </summary>
        /// <param name="IrrigationZone" type="String">所屬灌區</param>
        /// <param name="NName" type="String">所屬灌區</param>
        /// <param name="IrrigationAmount" type="String">給水量</param>
        /// <returns>Json</returns>
        GetWaterOperationChart: data => myAxios.post('/WaterOperation/GetWaterOperationChart', data),
    },
    //#endregion

    //#region SupIrrigDecisions 相關的 api (暫時連到PostMan)
    SupIrrigDecisions: {
        /// <summary>
        /// 取得曾文烏山頭灌區最後更新日期
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        //GetLastUpdate: data => postManAxios.post('/SupIrrigDecisions/GetLastUpdate', data),
        GetLastUpdate: data => myAxios.post('/SupIrrigDecisions/GetLastUpdate', data),

        /// <summary>
        /// 取得曾文烏山頭灌區有效蓄水量
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <param name="CompareDate" type="String">模擬期間-起始時間</param>
        /// <returns>Json</returns>
        //GetInitialWaterStorage: data => postManAxios.post('/SupIrrigDecisions/GetInitialWaterStorage', data),
        GetInitialWaterStorage: data => myAxios.post('/SupIrrigDecisions/GetInitialWaterStorage', data),

        /// <summary>
        /// 取得歷史同期蓄水量資料
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <param name="CompareDate" type="String"></param>
        /// <returns>Json</returns>
        //GetHistoricalPeriod: data => postManAxios.post('/SupIrrigDecisions/GetHistoricalPeriod', data),
        GetHistoricalPeriod: data => myAxios.post('/SupIrrigDecisions/GetHistoricalPeriod', data),

        /// <summary>
        /// 取得安全蓄水量數據
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <param name="DemoStartDate" type="String"></param>
        /// <param name="SimuStartDate" type="String"></param>
        /// <param name="SimuEndDate" type="String"></param>
        /// <param name="EffectiveStorage" type="String"></param>
        /// <returns>Json</returns>
        //GetSafetyWaterLine: data => postManAxios.post('/SupIrrigDecisions/GetSafetyWaterLine4', data),
        //GetSafetyWaterLine: data => postManAxios.post('/SupIrrigDecisions/GetSafetyWaterLine', data),
        //GetSafetyWaterLine2: data => postManAxios.post('/SupIrrigDecisions/GetSafetyWaterLine2', data),
        //GetSafetyWaterLine3: data => postManAxios.post('/SupIrrigDecisions/GetSafetyWaterLine3', data),
        GetSafetyWaterLine: data => myAxios.post('/SupIrrigDecisions/GetSafetyWaterLine', data),

        /// <summary>
        /// 取得需水量各選項資料
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <returns>Json</returns>
        //GetAllDataYear: data => postManAxios.post('/SupIrrigDecisions/GetAllDataYear', data),
        GetAllDataYear: data => myAxios.post('/SupIrrigDecisions/GetAllDataYear', data),

        /// <summary>
        /// 需水量設定(進階設定)
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <param name="DataYear" type="Int"></param>
        /// <returns>Json</returns>
        //GetPeriodCrop: data => postManAxios.post('/SupIrrigDecisions/GetPeriodCrop2', data),
        //GetPeriodCrop: data => postManAxios.post('/SupIrrigDecisions/GetPeriodCrop3', data),
        GetPeriodCrop: data => myAxios.post('/SupIrrigDecisions/GetPeriodCrop', data),

        /// <summary>
        /// 入流量設定(各旬超越機率入流量)
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        //GetPiTypeValue: data => postManAxios.post('/SupIrrigDecisions/GetPiTypeValue', data),
        GetPiTypeValue: data => myAxios.post('/SupIrrigDecisions/GetPiTypeValue', data),

        /// <summary>
        /// 取得歷史豐枯年度入流量排名資料
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <returns>Json</returns>
        //GetHistoricalInflowTotal: data => postManAxios.post('/SupIrrigDecisions/GetHistoricalInflowTotal', data),
        GetHistoricalInflowTotal: data => myAxios.post('/SupIrrigDecisions/GetHistoricalInflowTotal', data),

        /// <summary>
        /// 取得各情境方案的模擬結果
        /// </summary>
        /// <param name="" type="Json"></param>
        /// <returns>Json</returns>
        //SetSimulationParams: data => postManAxios.post('/SupIrrigDecisions/SetSimulationParams', data),
        SetSimulationParams: data => myAxios.post('/SupIrrigDecisions/SetSimulationParams', data),
    },
    //#endregion

    //#region Reservoir 相關的 api
    Reservoir: {
        /// <summary>
        /// 水庫屬性排名
        /// </summary>
        /// <param name="DataType" type="String">屬性(欄位)代碼(1: EffectiveStorage / 2: AccumulatedRainfall / 3: Inflow)</param>
        /// <param name="StartDate" type="String">查詢的開始時間</param>
        /// <param name="EndDate" type="String">查詢的結束時間</param>
        /// <param name="valUpper" type="String">設定屬性數值上限</param>
        /// <param name="valLower" type="String">設定屬性數值下限</param>
        /// <returns>Json</returns>
        GetHistoryReservoirDataRank: data => myAxios.post('/Reservoir/GetHistoryReservoirDataRank', data),

        /// <summary>
        /// 取得有資料的管理處
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        getPoundIrragarionList: data => myAxios.post('/Reservoir/getPoundIrragarionList', data),

        /// <summary>
        /// 取得有資料的日期(formData)
        /// </summary>
        /// <param name="id" type="String">管理處</param>
        /// <returns>Json</returns>
        getPoundDateList: (formData, config) => myAxios.post('/Reservoir/getPoundDateList', formData, config),

        /// <summary>
        /// 取得當期埤塘水情(formData)
        /// </summary>
        /// <param name="id" type="String">管理處</param>
        /// <param name="d" type="String">日期</param>
        /// <returns>Json</returns>
        getPoundInfoByIrrigation: (formData, config) => myAxios.post('/Reservoir/getPoundInfoByIrrigation', formData, config),

        /// <summary>
        /// 取得最後更新日期
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetPondLastUpdate: data => myAxios.post('/Reservoir/GetPondLastUpdate', data),
    },
    //#endregion

    //#region WaterSituation 相關的 api
    WaterSituation: {
        /// <summary>
        /// 取得蓄水量歷線圖資料
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <param name="value" type="Array">年分</param>
        /// <returns>Json</returns>
        GetReservoirWaterStorageData: data => myAxios.post('/WaterSituation/GetReservoirWaterStorageData', data),

        /// <summary>
        /// 取得水庫基本資料
        /// </summary>
        /// <param name="StationNo" type="String">水庫代碼</param>
        /// <returns>Json</returns>
        GetReservoirRuleDay: data => myAxios.post('/WaterSituation/GetReservoirRuleDay', data),

        /// <summary>
        /// 取得每日豐枯情勢
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        //GetIARainfallAndReservoirSummary: data => postManAxios.post('/WaterSituation/GetIARainfallAndReservoirSummary', data),
        GetIARainfallAndReservoirSummary: data => myAxios.post('/WaterSituation/GetIARainfallAndReservoirSummary', data),

        /// <summary>
        /// 取得歷史同期蓄水量枯旱排名
        /// </summary>
        /// <param name="BoundaryID" type="String"></param>
        /// <param name="startDate" type="String"></param>
        /// <param name="dataStartYear" type="Int">(預設1000)</param>
        /// <param name="dataEndYear" type="Int">(預設5000)</param>
        /// <returns>Json</returns>
        GetDateReservoirEffectStorageRankData: data => myAxios.post('/WaterSituation/GetDateReservoirEffectStorageRankData', data),

        /// <summary>
        /// 取得入庫水量枯旱排名
        /// </summary>
        /// <param name="BoundaryID" type="String"></param>
        /// <param name="startDate" type="String"></param>
        /// <param name="endDate" type="String"></param>
        /// <param name="dataStartYear" type="Int">(預設1000)</param>
        /// <param name="dataEndYear" type="Int">(預設5000)</param>
        /// <returns>Json</returns>
        GetDateRangeReservoirInflowRankData: data => myAxios.post('/WaterSituation/GetDateRangeReservoirInflowRankData', data),

        /// <summary>
        /// 取得多個水庫即時資料
        /// </summary>
        /// <param name="BoundaryID" type="String"></param>
        /// <returns>Json</returns>
        GetMultiLatestReservoirInfo: data => myAxios.post('/WaterSituation/GetMultiLatestReservoirInfo', data),

        /// <summary>
        /// 取得多個水庫即時資料(SameDay)
        /// </summary>
        /// <param name="StationNo" type="String"></param>
        /// <param name="MDDate" type="String"></param>
        /// <returns>Json</returns>
        GetSameDayEffectiveStorageData: data => myAxios.post('/WaterSituation/GetSameDayEffectiveStorageData', data),

        /// <summary>
        /// 取得枯旱排名最後更新日期(2.1.4蓄水量枯旱排名、2.1.5入庫水量枯旱排名)
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetLastUpdate: data => myAxios.post('/WaterSituation/GetLastUpdate', data),

        /// <summary>
        /// 取得蓄水量歷線圖資料最後更新日期(2.1.1即時水庫水情、2.1.2蓄水量歷線圖)
        /// </summary>
        /// <param name="" type=""></param>
        /// <returns>Json</returns>
        GetLastUpdate2: data => myAxios.post('/WaterSituation/GetLastUpdate2', data),
    },
    //#endregion
}