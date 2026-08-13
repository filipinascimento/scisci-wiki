# Reference-limit hidden-credit pressure

## Summary

Reference-limit hidden-credit pressure is the mechanism by which venue reference limits, article-length constraints, or compressed citation norms push authors to cite summaries, reviews, books, or nearby work instead of original discoveries.

## Canonical Form

- Unit of analysis: venue, article type, reference list, hidden-citing paper, alternative cited work, or foundational paper.
- Typical representation: reference-limit flag, reference-list length, cited intermediary type, and hidden-citation status.
- Mechanism: when reference space is scarce, authors use one citation to signal a broader body of knowledge, reducing explicit credit to origins.
- Empirical signature: textual evidence points to a foundational discovery while the reference list cites a review, book, application, extension, or other intermediary.

## Uses in Science of Science

- Explains one institutional source of [hidden citations](../measures/hidden_citations.md) that is distinct from the natural common-language pathway in [obliteration by incorporation](obliteration_by_incorporation.md).
- Connects author citation behavior to venue policy, article format, and [citation diversion hierarchy](citation_diversion_hierarchy.md).
- Helps interpret field and venue differences when comparing hidden-credit rates.
- Supports responsible metric use by distinguishing space-constrained omission from absence of influence.

## Operationalization

- Record venue reference limits, article types, reference-list lengths, and citation-context positions where available.
- Identify hidden citations and classify any alternative cited works as reviews, books, methods, datasets, applications, extensions, or adjacent papers.
- Compare hidden-credit rates between constrained and unconstrained formats while controlling for field, year, topic age, and topic mention volume.
- Combine reference-limit indicators with [hidden-citation indirect-path share](../measures/hidden_citation_indirect_path_share.md) to see whether constrained papers still route credit through nearby literature.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) states that hidden citations can be induced by restrictions on the number of references imposed by publishing venues.
- Meng et al. describe authors citing reviews and books to signal wider knowledge rather than crediting the original discoveries directly.
- Their diversion analysis shows that hidden citations often accompany cited alternatives such as books, reviews, applications, and extensions close to the foundational papers.
- This mechanism is consistent with, but not identical to, [discourse-saturation hidden-credit burden](discourse_saturation_hidden_credit_burden.md).

## Caveats

- A review or book can be the appropriate citation for a specific claim, not merely a shortcut.
- Venue reference limits are often undocumented or vary by article type and period.
- Observing an intermediary citation does not prove that the omitted original would have been cited without the constraint.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [citation diversion hierarchy](citation_diversion_hierarchy.md)
- [hidden-citation indirect-path share](../measures/hidden_citation_indirect_path_share.md)
- [discourse-saturation hidden-credit burden](discourse_saturation_hidden_credit_burden.md)
- [obliteration by incorporation](obliteration_by_incorporation.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `reference_limit_hidden_credit_pressure`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: reference cap hidden citations; citation-space pressure; compressed reference credit loss; venue reference-limit pressure
