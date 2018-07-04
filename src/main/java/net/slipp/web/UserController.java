package net.slipp.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import net.slipp.domain.User;
import net.slipp.domain.UserRepository;

@Controller
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserRepository UserRepository;
	
	@GetMapping("/form")
	public String form() {
		return "/user/form";
	}
	@PostMapping("")
	public String create(User user) {
		System.out.println("user : " + user);
		UserRepository.save(user);
		return "redirect:/users";
	}
	
	@GetMapping("")
	public String list(Model model) {
		model.addAttribute("users", UserRepository.findAll());
		return "/user/list";
	}
	@GetMapping("{id}/form")
	public String updateForm(@PathVariable Long id, Model model) {
		User user = UserRepository.findOne(id);
		model.addAttribute("user", user);
		return "/user/updateForm";
	}
}
