# LZJPCB Website V2.1

## 语言
- /en/ English
- /zh/ 中文
- /pt/ Português

## 配色
Professional Blue: #0B5CAD
Industrial Navy: #0B1F36
Hero Deep Navy: #071A2D
Accent Blue: #2B7FC4
Light Gray: #F4F7FA

## 图片
请把真实照片放进 /images/，文件名必须与 HTML 中一致，例如：
- hero-pcb-factory.webp
- pcb-manufacturing.webp
- smt-assembly.webp
- component-sourcing.webp
- china-pcb-production.webp
- china-smt-line.webp
- aoi-inspection.webp
- xray-inspection.webp
- spi-inspection.webp
- testing-equipment.webp
- warehouse.webp
- production-floor.webp
- engineers.webp
- qc-inspection.webp
- indonesia-production.webp
- indonesia-smt.webp
- indonesia-qc.webp

建议使用 WebP。不要使用虚假工厂照片。

## 图片替换方法
例如：
<img src="../images/smt-assembly.webp" alt="SMT assembly production line" loading="lazy">

只需要把真实照片命名为 smt-assembly.webp 放入 images 文件夹即可。

## 上线前必须完成
1. 用真实工厂照片替换图片文件。
2. 核实 UL / ISO 9001 / ISO 13485 后再展示正式认证信息。
3. RFQ 表单目前为前端演示，需要接入真实邮箱、CRM、后端 API 或表单服务。
4. 文件上传目前为前端 UI，需要配置实际上传接口。
5. 正式域名统一使用 https://szpcbpcba.com/
6. 配置 sitemap.xml、robots.txt、301、SSL、Google Search Console。
7. 根据真实公司资料完善 About / Quality / Manufacturing Facility。
8. 正式上线前检查每个语言页面的 hreflang、canonical、表单和移动端。


## V2.2 新增
- 新增 Français（FR）和 Español（ES）完整静态页面。
- 语言切换统一为 EN / 中文 / PT / FR / ES。
- 全部页面增加 fr-FR / es-ES hreflang。
- 保持原有响应式设计、RFQ CTA 和图片占位结构。
