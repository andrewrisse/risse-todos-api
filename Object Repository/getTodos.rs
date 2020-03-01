<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>getTodos</name>
   <tag></tag>
   <elementGuidId>72246f5b-dd0a-4517-a672-7709cbe8d25e</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent></httpBodyContent>
   <httpBodyType></httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-type</name>
      <type>Main</type>
      <value>application/json</value>
   </httpHeaderProperties>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>GET</restRequestMethod>
   <restUrl>HTTP://www.andrewrisse.com/api/todos</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceFunction></soapServiceFunction>
   <verificationScript>import static org.assertj.core.api.Assertions.*

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webservice.verification.WSResponseManager

import groovy.json.JsonSlurper
import internal.GlobalVariable as GlobalVariable

RequestObject request = WSResponseManager.getInstance().getCurrentRequest()

ResponseObject response = WSResponseManager.getInstance().getCurrentResponse()








WS.verifyResponseStatusCode(response, 200)
WS.verifyElementPropertyValue(response, '[0].completed', false)
WS.verifyElementPropertyValue(response, '[0].name', &quot;Walk Dog&quot;)


assertThat(response.getHeaderFields().get('Content-Type').toString()).isEqualTo('[application/json; charset=utf-8]')

assertThat(response.getHeaderFields().containsKey('Content-Type')).isTrue()</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
