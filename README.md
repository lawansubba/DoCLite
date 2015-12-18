# DoCLite
Docker Container-based Lightweight Bench-marking on the Cloud

Benchmarking is used to select Virtual Machines (VMs) that can maximise the performance of an application on the cloud. Current benchmarking methods on the cloud are time consuming and therefore expensive and cannot be used in real-time. The DoCLite (Docker Container-based Lightweight Benchmarking) tool was developed to incorporate lightweight benchmarks, which can benchmark cloud VMs faster than existing methods.


-----------------------------------------------------------
DoCLite Installation Manual
-----------------------------------------------------------
 Docker Container Lightweight Benchmarking Tool (DoCLite) implements a Lightweight and Hybrid benchmarking 
 technique. The lightweight technique uses containers to benchmark a subset of the systems resources. Whereas 
 the hybrid technique combines the historic and current benchmark data. When compared with heavyweight 
 benchmarking, both techniques show promising results

1) Requirements
	
	a) .NET Framework 4.5
	
	b) Any version of IIS that supports .NET framework 4.5
	
	c) You need a FTP server, which which will act as benchmark repository. The FTP server must have read-write permissions.
	
	The folder and file structure on the FTP server must be:
			|---Scripts
				|------RunBenchmark.py
			|---Benchmark
				|----Heavy
					|----Light
						|-----LMbench
							|-----Parr
								|----1000MB
								|----500Mb
								|----100Mb
							|-----Seq
								|----1000MB
								|----500Mb
								|----100Mb

2) Settings
	a) 
		The default login credentials  are
		username: test
		password: test
		
		The credentials can be changed from web.config
	b) 	
		The application settings are stored in AppSettings.config
			<add key="FTPServer" value="54.68.62.95" />    // The FTP server
			<add key="FtpUser" value="ftpadmin" />	       // The FTP server user name 
			<add key="FtpPassword" value="123" />	       // The FTP Server password
			<add key="securitygroup" value="launch-wizard-5" />  // The Amazon EC2 security group your user is a member of
			<add key="keyname" value="" />		// The Amazon EC2 security key name
			<add key="AccessKey" value="" />	// The Amazon EC2 access key
			<add key="SecretKey" value="" />    	// The Amazon EC2 secret key
			
3) Result Files
	The result files contains LMbench results from our benchmark runs.
