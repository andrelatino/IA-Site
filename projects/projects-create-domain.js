const createDomain = async () => {
    const token = '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';
    const owner = 'icheff';
    const repo = 'clic.one';
    const cname = 'clic.one';
  
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pages`;
  
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Your-User-Agent'
    };
        // https_enforced: true,
    const body = JSON.stringify({
      https_enforced: true,
      cname:cname,
      source: {
        branch: 'main',
        path: '/'
      }
    });
  
    const options = {
      method: 'PUT',
      headers,
      body
    };
  
    try {
      const response = await fetch(apiUrl, options);
      if (response.status === 204) {
        console.log('Domain added successfully');
      } else {
        console.error('Failed to add domain:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  