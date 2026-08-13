# Patent-to-patent citation noise

## Summary

Patent-to-patent citation noise is the validation concern that patent citations to earlier patents can reflect examiner search, attorney strategy, or legal positioning rather than inventor-side knowledge flow.

## Canonical Form

- Unit of analysis: patent-to-patent citation, source-role flag, inventor knowledge-flow claim, patent family, technology class, or jurisdiction.
- Typical representation: examiner/applicant split, source-filtered patent citation graph, robustness comparison, or interpretive caveat.
- Validation target: whether a patent-to-patent citation network can be used as evidence of actual technological knowledge diffusion.
- Empirical signature: conclusions change when examiner-added, attorney-supplied, or strategically omitted citations are separated from inventor-supplied references.

## Uses in Science of Science

- Qualifies patent-citation evidence before comparing it with [scientific non-patent references](../datasets/scientific_non_patent_references.md).
- Explains why [patent citation source roles](patent_citation_source_roles.md) and [patent examiner citation caveat](patent_examiner_citation_caveat.md) are needed for patent-based impact or diffusion studies.
- Motivates using [patent-paper links](../datasets/patent_paper_links.md) and patent citations to science as an alternative or complement when studying science-to-technology flow.
- Supports robustness checks in [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md), where patent-to-patent edges and patent-to-paper edges have different meanings.

## Operationalization

- Preserve applicant/examiner/other/unknown source-role flags where available.
- Recompute diffusion, centrality, distance, or impact estimates using applicant-only and examiner-only patent-to-patent citation subsets.
- Audit whether legal strategy, disclosure rules, or examiner burden differs across jurisdictions, time periods, or technology classes.
- Avoid interpreting patent-to-patent edges as inventor knowledge flows without a source-role or design-based validation.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) notes that patent-to-patent citations are easy to process because patents cite one another by number.
- The same paper warns that many patent-to-patent citations are added by examiners and may not represent actual knowledge flows.
- Marx and Fuegi also cite evidence that applicants may strategically cite or not cite other patents to help the application through examination, and that patent lawyers may add citations instead of inventors.
- The paper concludes that patent-to-patent citations may be noisy indicators of knowledge flows, motivating closer attention to patent citations to science.

## Caveats

- Noisy does not mean useless: examiner-added prior art can still be relevant to technological positioning.
- Source-role availability varies by patent office, period, and data source.
- Applicant-supplied patent citations can still be strategic rather than knowledge-flow evidence.

## Links

- [patent citation source roles](patent_citation_source_roles.md)
- [patent examiner citation caveat](patent_examiner_citation_caveat.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [patent maintenance fee value proxy](../measures/patent_maintenance_fee_value_proxy.md)
- [disruption measure validation](disruption_measure_validation.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_to_patent_citation_noise`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: patent citation knowledge-flow noise; patent-to-patent citation caveat; strategic patent citation; legal prior-art citation noise
