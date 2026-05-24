# 🤖 Agent Guidelines (`AGENTS.md`)

Welcome to the **Portfolio Website**! This repository is optimized for autonomous AI coding agents. To ensure the highest quality of development, design, and maintainability, agents must adhere to the workflows and utilize the specialized skills outlined in this document.

## 🎯 Primary Directives
1. **Aesthetics First**: This is a personal portfolio. Visual excellence is non-negotiable. Always prioritize premium, polished, and dynamic designs over functional MVPs.
2. **Component-Driven**: Build reusable, maintainable components using React, Tailwind CSS, and Shadcn UI.
3. **Performance & Polish**: Ensure silky smooth animations (via Framer Motion), flawless responsive layouts, and fast load times.

---

## 🧠 Available Skills & Capabilities

This repository is equipped with specialized skills located in the `.agents/skills` directory. **Agents MUST invoke or reference these skills** whenever performing related tasks to guarantee high-quality outputs:

### 🎨 Design & UI/UX
- **`hallmark`**: Anti-AI-slop design skill for greenfield pages, audits, redesigns, and design extraction. Use when building a new app or landing page, or redesigning something to ensure the UI looks human-made rather than generated.
- **`ui-ux-pro-max`**: Use this for high-level design intelligence, color palettes, spacing, layout, and crafting state-of-the-art UI elements across various design trends (glassmorphism, bento grids, etc.).
- **`emil-design-eng`**: Apply this for detailed interaction design, micro-animations, and the "invisible details" that make software feel incredibly premium and responsive.
- **`web-design-guidelines`**: Use this to audit UI code for accessibility, Web Interface Guidelines compliance, and rigorous UX reviews.
- **`frontend-design`**: Use this for architecting frontend components, ensuring clean code, solid structural integrity, and robust React patterns.

### 🧩 Components & Frameworks
- **`shadcn`**: **CRITICAL.** Invoke this skill whenever adding, searching, modifying, or styling Shadcn UI components. It ensures compliance with the project's component registry and presets.

### 🧪 Testing & Automation
- **`agent-browser`**: Use this for browser automation, exploratory testing, taking screenshots of UI changes, or interacting with the live app to verify changes and catch visual bugs.

### 🛠️ Specialized Integrations
- **`remotion-best-practices`**: Reference this if generating programmatic videos or rich media within React (Remotion).
- **`skill-creator` / `find-skills`**: Use these to discover new capabilities or author custom skills tailored specifically to this project's evolving needs.

---

## 📝 Standard Agent Workflow

When assigned a task, agents should follow this standard operating procedure:
1. **Context Gathering**: Read the relevant `.tsx` files and understand the current Tailwind/Framer Motion implementations.
2. **Consult Skills**: Check the `.agents/skills/` directory for the appropriate skill. For example:
   - If adding a dropdown, consult `shadcn`.
   - If designing a new hero section, consult `ui-ux-pro-max` and `emil-design-eng`.
3. **Execution**: Implement the changes adhering strictly to the skill guidelines. Do not use generic, outdated, or boilerplate styling.
4. **Validation**: Validate accessibility using `web-design-guidelines`. If instructed, use `agent-browser` to visually confirm the changes.

---

> **Note to Human Contributors**: To empower your agents with new capabilities, install skills using:
> `npx skills add <github-repo-url> --skill <skill-name>`
