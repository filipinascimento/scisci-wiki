# University-firm patent-paper handoff

## Summary

University-firm patent-paper handoff is the mechanism in which university-produced scientific papers are directly cited by firm-owned patents, linking public science outputs to private-sector invention.

## Canonical Form

- Unit of analysis: direct patent-paper boundary edge, paper institution, patent assignee, university, firm, government laboratory, or technology class.
- Typical representation: assignee-author institution cross-tab, direct-boundary edge share, university-paper to firm-patent flow, or institutional handoff graph.
- Mechanism: university and government science can operate as public knowledge infrastructure that firms draw on when creating patents.
- Empirical signature: a large share of direct boundary patents are assigned to firms while a large share of the cited boundary papers come from universities.

## Uses in Science of Science

- Adds an institutional channel to [patent-paper boundary](../representations/patent_paper_boundary.md) and [patent-paper links](../datasets/patent_paper_links.md).
- Complements [scientist-inventor boundary spanning](scientist_inventor_boundary_spanning.md), where the same individual spans the boundary personally.
- Helps interpret [patent-paper boundary impact premium](patent_paper_boundary_impact_premium.md) as partly an institutional public-science to private-invention flow.
- Connects science-technology linkage to policy arguments about universities, public goods, and technology transfer.

## Operationalization

- Identify direct patent-paper boundary edges.
- Classify patent assignees as firms, universities, government laboratories, or other institution types.
- Classify paper institutions from author addresses or affiliation metadata.
- Cross-tab direct boundary links by patent assignee type and paper institution type, optionally stratifying by technology class and field.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) sorts USPTO patents and Web of Science papers into universities, U.S. government laboratories, and firms.
- At the direct boundary, the paper reports that 78% of `D=1` patents were assigned to firms, while 80% of `D=1` papers had university authors.
- Ahmadpoor and Jones interpret this pattern as consistent with the view that university outputs act as public goods that marketplace invention can draw on.
- The paper also reports that university patents are especially close to science, but most direct boundary patents still come from firms.

## Caveats

- Institutional assignment can miss mixed affiliations, subsidiaries, inventor mobility, and informal channels.
- A direct citation from a firm patent to a university paper does not prove that the firm learned from the paper through a specific social channel.
- Handoffs and same-person boundary spanning can coexist and should be separated when the data allow.

## Links

- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [scientist-inventor boundary spanning](scientist_inventor_boundary_spanning.md)
- [patent-paper boundary impact premium](patent_paper_boundary_impact_premium.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [institutional prestige hierarchy](institutional_prestige_hierarchy.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `university_firm_patent_paper_handoff`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: institutional patent-paper handoff; university paper to firm patent flow; public science private invention link; science-to-market institutional handoff
