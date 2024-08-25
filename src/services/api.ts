
const NEWS_API_KEY = '767a0da89df14c53b4a56f80053c573b';
const NYT_API_KEY = 'yCgderQvR3sATDbxGXDyNhw9fjkDVXAA';
const GUARDIAN_API_KEY = '5e5eba49-6754-4e11-a9bd-ad7d23634beb';

export const fetchNewsArticles = async (keyword: string, date: string, category: string, source: string) => {
    try {
      let allArticles: any[] = [];
  
      switch (source) {
        case 'all':
          // Fetch from NewsAPI  REMOVED DUE TO PAYD VERSION REQUIRED
        //   const newsApiResponse = await fetch(
        //     category !== 'all' ?
        //     `https://newsapi.org/v2/top-headlines?q=${keyword}&from=${date}&category=${category}&apiKey=${NEWS_API_KEY}`
        //     :
        //     keyword.length > 0 ?
        //     `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&apiKey=${NEWS_API_KEY}`
        //     :
        //     `https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=${NEWS_API_KEY}`
        //   );
        //   const newsApiData = await newsApiResponse.json();
        //   const formattedNewsApiArticles = newsApiData.articles.map((article: any, index: number) => ({
        //     id: `newsapi-${index}`,
        //     title: article.title,
        //     snippet: article.description,
        //     imageUrl: article.urlToImage,
        //     source: article.source.name,
        //     date: article.publishedAt,
        //   }));
  
          // Fetch from New York Times API
          const nytApiResponse = await fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}${date && `&begin_date=${date}`}${category !== "all" && `fq=${category}`}&api-key=${NYT_API_KEY}`
          );
          const nytApiData = await nytApiResponse.json();
          const formattedNytArticles = nytApiData.response.docs.map((article: any, index: number) => ({
            id: `nyt-${index}`,
            title: article.headline.main,
            snippet: article.abstract,
            imageUrl: `https://www.nytimes.com/${article.multimedia?.[0]?.url}`,
            source: 'The New York Times',
            date: article.pub_date,
          }));
  
          // Fetch from The Guardian API
          const guardianApiResponse = await fetch(
             `https://content.guardianapis.com/search?q=${keyword}${date && `&from-date=${date}`}${category !== 'all' && `&section=${category}`}&api-key=${GUARDIAN_API_KEY}&show-fields=headline,thumbnail,body`
          );
          const guardianApiData = await guardianApiResponse.json();
          const formattedGuardianArticles = guardianApiData.response.results.map((article: any, index: number) => ({
            id: `guardian-${index}`,
            title: article.fields.headline,
            snippet: article.fields.body.substring(0, 150) + '...',
            imageUrl: article.fields.thumbnail,
            source: 'The Guardian',
            date: article.webPublicationDate,
          }));
  
          // Combine all articles
          allArticles = [
            // ...formattedNewsApiArticles,
            ...formattedNytArticles,
            ...formattedGuardianArticles,
          ];
          break;
  
        // case 'newsapi':
        //   // Fetch from NewsAPI // Fetch from NewsAPI  REMOVED DUE TO PAYD VERSION REQUIRED
        //   const newsApiOnlyResponse = await fetch(
        //     category !== 'all' ?
        //     `https://newsapi.org/v2/top-headlines?q=${keyword}&from=${date}&category=${category}&apiKey=${NEWS_API_KEY}`
        //     :
        //     keyword.length > 0 ?
        //     `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&apiKey=${NEWS_API_KEY}`
        //     :
        //     `https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=${NEWS_API_KEY}`
        //   );
        //   const newsapiData = await newsApiOnlyResponse.json();
        //   allArticles = newsapiData.articles.map((article: any, index: number) => ({
        //     id: `newsapi-${index}`,
        //     title: article.title,
        //     snippet: article.description,
        //     imageUrl: article.urlToImage,
        //     source: article.source.name,
        //     date: article.publishedAt,
        //   }));
        //   break;
  
        case 'nyt':
          // Fetch from New York Times API
          const nytOnlyResponse = await fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}${date && `&begin_date=${date}`}${category !== "all" && `fq=${category}`}&api-key=${NYT_API_KEY}`
          );
          const nytOnlyData = await nytOnlyResponse.json();
          allArticles = nytOnlyData.response.docs.map((article: any, index: number) => ({
            id: `nyt-${index}`,
            title: article.headline.main,
            snippet: article.abstract,
            imageUrl: `https://www.nytimes.com/${article.multimedia?.[0]?.url}`,
            source: 'The New York Times',
            date: article.pub_date,
          }));
          break;
  
        case 'guardian':
          // Fetch from The Guardian API
          const guardianOnlyResponse = await fetch(
            `https://content.guardianapis.com/search?q=${keyword}${date && `&from-date=${date}`}${category !== 'all' && `&section=${category}`}&api-key=${GUARDIAN_API_KEY}&show-fields=headline,thumbnail,body`
          );
          const guardianOnlyData = await guardianOnlyResponse.json();
          allArticles = guardianOnlyData.response.results.map((article: any, index: number) => ({
            id: `guardian-${index}`,
            title: article.fields.headline,
            snippet: article.fields.body.substring(0, 150) + '...',
            imageUrl: article.fields.thumbnail,
            source: 'The Guardian',
            date: article.webPublicationDate,
          }));
          break;
  
        default:
          console.warn('Source not recognized');
          break;
      }
  
      // Optionally, sort articles by date
      allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
      return allArticles;
    } catch (error) {
      console.error('Erro ao buscar artigos:', error);
      throw error;
    }
  };