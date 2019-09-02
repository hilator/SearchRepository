using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angular6Project.Controllers
{
  [Route("api/[Controller]")]
  public class SearchController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}
    [HttpGet("/api/valuess")]
    public IEnumerable<string> Get()
    {
      return new string[] { "lili", "tali", "dima", "janna" };
    }
  }
  
}
