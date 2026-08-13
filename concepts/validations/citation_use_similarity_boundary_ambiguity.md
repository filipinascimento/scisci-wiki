# Citation use-similarity boundary ambiguity

## Summary

Citation use-similarity boundary ambiguity is the difficulty of distinguishing whether a citation means actual use, mere similarity, or intellectual ancestry.

## Canonical Form

- Unit of analysis: citation context, citation-function label, method reference, cited work, or annotator disagreement.
- Typical representation: disagreement note, boundary category, error class, or adjudication rule.
- Validation target: whether citation-function labels separate use, similarity, basis, and lineage consistently.
- Empirical signature: the same evidence span plausibly supports multiple role labels.

## Uses in Science of Science

- Qualifies [citation function taxonomies](../representations/citation_function_taxonomies.md).
- Feeds [citation role attachment error analysis](citation_role_attachment_error_analysis.md) and label-guideline revisions.
- Helps avoid overinterpreting typed citation edges in [rhetorical citation maps](../representations/rhetorical_citation_maps.md).
- Matters for technology-transfer or knowledge-flow claims that treat citations as use.

## Operationalization

- Identify citation-function categories that distinguish use, similarity, basis, modification, or motivation.
- Code ambiguous cases and track disagreements by category pair.
- Add evidence requirements for actual use, such as implementation language or method-dependence cues.
- Collapse categories or preserve uncertainty when reliable separation is not possible.
- Report ambiguity rates in classifier evaluation and manual annotation.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) discusses difficult boundaries among use, similarity, and related citation roles.
- The paper's fine-grained taxonomy includes categories for using, modifying, similarity, and basis relations, creating boundary cases.
- Its error analysis notes that role attachment and fine-grained distinctions remain hard for both humans and machines.
- This validation motif captures the annotation uncertainty behind typed citation edges.

## Caveats

- Authors may deliberately understate dependence or avoid explicit criticism.
- A citation can simultaneously indicate use, similarity, and intellectual ancestry.
- Strict boundary rules can improve agreement while losing useful nuance.

## Links

- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [citation role attachment error analysis](citation_role_attachment_error_analysis.md)
- [citation-function agreement validation](citation_function_agreement_validation.md)
- [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md)
- [third-party cited-work contrast annotation](../representations/third_party_cited_work_contrast_annotation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_use_similarity_boundary_ambiguity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation-use ambiguity; use-versus-similarity boundary; citation role boundary ambiguity; citation lineage-use confusion
