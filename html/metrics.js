function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["untitledModelClass::rtP"] = {file: "C:\\Users\\Szili\\OneDrive - Budapesti Műszaki és Gazdaságtudományi Egyetem\\Dokumentumok\\Egyetem\\EFOP Autonóm jármű\\Work\\BFMC\\02_Control\\Simulink model for implementation\\try1_ert_rtw\\try1_data.cpp",
	size: 16};
	 this.metricsArray.fcn["mwRaspiInit"] = {file: "C:\\ProgramData\\MATLAB\\SupportPackages\\R2019b\\toolbox\\realtime\\targets\\raspi\\server\\MW_raspi_init.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["mwRaspiTerminate"] = {file: "C:\\ProgramData\\MATLAB\\SupportPackages\\R2019b\\toolbox\\realtime\\targets\\raspi\\server\\MW_raspi_init.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["reportOverrun"] = {file: "C:\\ProgramData\\MATLAB\\SupportPackages\\R2019b\\toolbox\\realtime\\targets\\raspi\\server\\MW_raspi_init.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitledModelClass::getRTM"] = {file: "C:\\Users\\Szili\\OneDrive - Budapesti Műszaki és Gazdaságtudományi Egyetem\\Dokumentumok\\Egyetem\\EFOP Autonóm jármű\\Work\\BFMC\\02_Control\\Simulink model for implementation\\try1_ert_rtw\\try1.cpp",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitledModelClass::initialize"] = {file: "C:\\Users\\Szili\\OneDrive - Budapesti Műszaki és Gazdaságtudományi Egyetem\\Dokumentumok\\Egyetem\\EFOP Autonóm jármű\\Work\\BFMC\\02_Control\\Simulink model for implementation\\try1_ert_rtw\\try1.cpp",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitledModelClass::step"] = {file: "C:\\Users\\Szili\\OneDrive - Budapesti Műszaki és Gazdaságtudományi Egyetem\\Dokumentumok\\Egyetem\\EFOP Autonóm jármű\\Work\\BFMC\\02_Control\\Simulink model for implementation\\try1_ert_rtw\\try1.cpp",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitledModelClass::terminate"] = {file: "C:\\Users\\Szili\\OneDrive - Budapesti Műszaki és Gazdaságtudományi Egyetem\\Dokumentumok\\Egyetem\\EFOP Autonóm jármű\\Work\\BFMC\\02_Control\\Simulink model for implementation\\try1_ert_rtw\\try1.cpp",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitledModelClass::untitledModelClass"] = {file: "C:\\Users\\Szili\\OneDrive - Budapesti Műszaki és Gazdaságtudományi Egyetem\\Dokumentumok\\Egyetem\\EFOP Autonóm jármű\\Work\\BFMC\\02_Control\\Simulink model for implementation\\try1_ert_rtw\\try1.cpp",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["untitledModelClass::~untitledModelClass"] = {file: "C:\\Users\\Szili\\OneDrive - Budapesti Műszaki és Gazdaságtudományi Egyetem\\Dokumentumok\\Egyetem\\EFOP Autonóm jármű\\Work\\BFMC\\02_Control\\Simulink model for implementation\\try1_ert_rtw\\try1.cpp",
	stack: 0,
	stackTotal: 0};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="try1_metrics.html">Global Memory: 16(bytes) Maximum Stack: 0(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
