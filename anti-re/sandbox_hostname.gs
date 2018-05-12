// Example gscript template
// Title: Sandbox_Hostname
// Author: ahhh
// Purpose: Gets the computers hostname, converts it to caps, then checks against a list of well known sandbox hostnames
// Gscript version: 0.1.2
// 

//priority:50
//timeout:75

function BeforeDeploy() {
  LogInfo("Testing Sandbox Hostname!");
  var obj = GetHost();
  var host = (obj.hostname).toUpperCase();
  LogInfo(host);
  if (host == "TEQUILABOOMBOOM" || host == "SANDBOX" || host == "VIRUS" || host == "MALWARE" || host == "MALTEST" || host == "PC") 
  {
    LogInfo("Sandbox detected, exiting");
    KillSelf();
    return false;
  }
  return true; 
}

function Deploy() {  
  return true;
}

function AfterDeploy() {
  LogInfo("Done Testing Hostname!");
  return true;
}