using CourseManagementWebApi.Data;
using CourseManagementWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CourseManagementWebApi.Controllers;

[ApiController]
[Route("api/courses")]
public class CourseController : ControllerBase
{
   private MyDbContext _context;

   public CourseController(MyDbContext context)
   {
      _context = context;
   }

   [HttpGet]
   public async Task<IEnumerable<Course>> GetCourses()
   {
      return await _context.Courses.ToListAsync();
   }

   [HttpGet("{id}")]
   public async Task<ActionResult<Course>> GetCourse(int id)
   {
      var course = await _context.Courses.FindAsync(id);
      if (course == null)
      {
         return NotFound("Course not found");
      }
      return Ok(course);
   }
   [HttpPost]
   public async Task<ActionResult<Course>> AddCourse(Course course)
   {
      _context.Courses.Add(course);
      await _context.SaveChangesAsync();
      return Ok(course);
   }

   [HttpPut("{id}")]
   public async Task<IActionResult> UpdateCourse(int id, Course course)
   {
      if (id != course.id)
      {
         return BadRequest("Id mismatch");
      }

      var existingCourse = await _context.Courses.FindAsync(id);

      if (existingCourse == null)
      {
         return NotFound("Course not found");
      }
      existingCourse.title = course.title;
      existingCourse.description = course.description;
      existingCourse.duration = course.duration;

      await _context.SaveChangesAsync();

      return Ok(existingCourse);
   }

   [HttpDelete("{id}")]
   public async Task<IActionResult> DeleteCourse(int id)
   {
      var existingCourse = await _context.Courses.FindAsync(id);

      if (existingCourse == null)
      {
         return NotFound("Course not found");
      }

      _context.Courses.Remove(existingCourse);
      await _context.SaveChangesAsync();
      return Ok(new { message = "Course deleted successfully" });
   }
   
}