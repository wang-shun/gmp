
package com.gome.gmp.ws.organization.pi;

/**
 * Please modify this class to meet your needs
 * This class is not complete
 */

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import javax.xml.namespace.QName;

/**
 * This class was generated by Apache CXF 2.6.1
 * 2016-04-12T14:07:04.166+08:00
 * Generated source version: 2.6.1
 * 
 */
public final class SIIHR055REQ_HTTPSPort_Client {

    private static final QName SERVICE_NAME = new QName("URN:PI", "XI_65d0c7b27040398384d5c663b85cdfb2_Service");

    private SIIHR055REQ_HTTPSPort_Client() {
    }

    public static void main(String args[]) throws java.lang.Exception {
        URL wsdlURL = XI65D0C7B27040398384D5C663B85Cdfb2Service.WSDL_LOCATION;
        if (args.length > 0 && args[0] != null && !"".equals(args[0])) { 
            File wsdlFile = new File(args[0]);
            try {
                if (wsdlFile.exists()) {
                    wsdlURL = wsdlFile.toURI().toURL();
                } else {
                    wsdlURL = new URL(args[0]);
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
      
        XI65D0C7B27040398384D5C663B85Cdfb2Service ss = new XI65D0C7B27040398384D5C663B85Cdfb2Service(wsdlURL, SERVICE_NAME);
        SIIHR055REQ port = ss.getHTTPSPort();  
        
        {
        System.out.println("Invoking siIHR055REQ...");
        com.gome.gmp.ws.organization.pi.ZHRORGEHMD _siIHR055REQ_parameters = null;
        com.gome.gmp.ws.organization.pi.ZHRORGEHMDResponse _siIHR055REQ__return = port.siIHR055REQ(_siIHR055REQ_parameters);
        System.out.println("siIHR055REQ.result=" + _siIHR055REQ__return);


        }

        System.exit(0);
    }

}
