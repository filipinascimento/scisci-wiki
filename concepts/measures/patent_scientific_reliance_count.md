# Patent scientific reliance count

## Summary

Patent scientific reliance count measures how many resolved scientific publications are cited by a patent, firm, industry, or technology field.

## Canonical Form

- Unit of analysis: patent, assignee, firm, industry, technology class, country, year, or patent cohort.
- Typical representation: count of patent citations to science, share of patents with at least one PCS, or field-normalized PCS count.
- Measurement target: observable reliance on scientific input in technological invention.
- Empirical signature: a patent or aggregate unit has more confidence-scored patent-paper citations after non-scientific references are filtered out.

## Uses in Science of Science

- Converts [patent-paper links](../datasets/patent_paper_links.md) into a simple science-reliance covariate or outcome.
- Complements [scientific knowledge application index](scientific_knowledge_application_index.md), which focuses on the share of patents with at least one scientific-publication reference.
- Improves on raw non-patent-reference counts by using [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md).
- Supports studies of firm reliance on academic science, industry science intensity, university commercialization, and science-based technology fields.

## Operationalization

- Choose confidence thresholds for patent-paper links and report the threshold.
- Count distinct resolved scientific papers cited by each patent, optionally separating applicant, examiner, other, and unknown source roles.
- Aggregate counts to firms, industries, patent classes, countries, or years with patent-denominator controls.
- Compare raw non-patent-reference counts against filtered scientific-publication counts when validating the measure.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) states that researchers often wish to control for the reliance of a patent, firm, or industry on scientific input.
- The paper warns that non-patent-reference counts are a weak proxy because many non-patent references are product brochures, patent-office actions, and other non-scientific materials.
- Marx and Fuegi argue that directly mapping non-patent references to papers lets researchers include counts of patent citations to science with greater confidence.
- The released PCS file is explicitly described as sufficient for researchers interested only in the number of PCS per patent.

## Caveats

- A PCS count is a documented-reference count, not direct proof of causal reliance.
- Counts depend on source-role inclusion, confidence threshold, patent-office practice, front-page scope, and paper-corpus coverage.
- Larger patents or fields with longer reference lists may need normalization before comparison.

## Links

- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [patent-science link confidence score](patent_science_link_confidence_score.md)
- [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md)
- [scientific knowledge application index](scientific_knowledge_application_index.md)
- [normalized scientific knowledge application index](normalized_scientific_knowledge_application_index.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_scientific_reliance_count`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: PCS count; patent citations to science count; patent science reliance count; scientific input count
