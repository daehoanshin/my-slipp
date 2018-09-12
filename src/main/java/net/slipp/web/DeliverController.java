package net.slipp.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/deliver")
public class DeliverController {
	
	@GetMapping("")
	public String deliverHome(Model model) {
		return "/deliver/deliver";
	}
}
