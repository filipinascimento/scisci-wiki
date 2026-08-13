# Academic discovery patenting selection bias

## Summary

Academic discovery patenting selection bias is the undercount of academic discovery diffusion when commercialization is measured only through university-owned patents or licensing records.

## Canonical Form

- Unit of analysis: academic paper, university patent, firm patent, patent-paper citation, licensing record, or commercialization outcome.
- Typical representation: coverage caveat contrasting patented academic inventions with papers later cited by patents.
- Validation target: whether a commercialization sample captures discoveries that diffuse through publications rather than formal university patenting.
- Empirical signature: many scientific papers influence patents even when the university did not patent or license the focal discovery.

## Uses in Science of Science

- Qualifies [patent-paper links](../datasets/patent_paper_links.md) as broader than university patent ownership.
- Explains why [patent scientific reliance count](../measures/patent_scientific_reliance_count.md) can reveal diffusion missed by licensing datasets.
- Connects [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md) to publication-mediated commercialization.
- Supports broader [scientific knowledge application index](../measures/scientific_knowledge_application_index.md) designs.

## Operationalization

- Compare academic paper-to-patent links with university-owned patent and license records.
- Count cited scientific papers with no matching university patent.
- Stratify by institution, field, publication year, and firm assignee where possible.
- Treat patent-only academic samples as selected unless the denominator includes papers that were not patented by universities.
- Report whether the target is formal technology transfer or broader knowledge use.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) argues that patent citations to science capture published academic discoveries beyond university patenting.
- The paper notes that academic discoveries may diffuse through publication even when they are not represented in university-owned patents.
- It also identifies downstream opportunities to connect academic papers with startups, entrepreneurship, productivity, and employment outcomes.
- This makes PCS a way to reduce selection bias in commercialization studies, not merely another patent table.

## Caveats

- Patent citations to papers still omit non-patented uses of science.
- University-owned patent records remain appropriate when the question is formal technology transfer.
- PCS evidence should not be equated with economic value without outcome validation.

## Links

- [patent-paper links](../datasets/patent_paper_links.md)
- [patent scientific reliance count](../measures/patent_scientific_reliance_count.md)
- [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [PCS commercialization outcome expansion](../mechanisms/pcs_commercialization_outcome_expansion.md)
- [scientist-inventor boundary spanning](../mechanisms/scientist_inventor_boundary_spanning.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `academic_discovery_patenting_selection_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: university patent selection bias; academic commercialization patenting bias; paper-mediated commercialization gap; patent-only academic discovery bias
