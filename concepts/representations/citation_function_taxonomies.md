# Citation function taxonomies

## Summary

Citation function taxonomies classify why a citation appears, such as background, use, modification, motivation, comparison, support, or critique.

## Canonical Form

- Unit of analysis: citation marker, citation sentence, cited work, citing-cited pair, or typed citation edge.
- Typical representation: finite label set, rhetorical-role taxonomy, or typed edge schema.
- Mechanism or measurement target: semantic role of a citation beyond the existence of a reference-list edge.
- Empirical signature: citations with the same cited work can carry different roles, such as method use, conceptual ancestry, comparison, or neutral background.

## Uses in Science of Science

- Adds role information to [citation contexts and functions](citation_contexts.md).
- Helps evaluate whether citation counts reflect use, criticism, perfunctory background, or intellectual ancestry.
- Provides a schema for [citation function classification](../methods/citation_function_classification.md).
- Supplies labels that can be audited with [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md) and [citation-function agreement validation](../validations/citation_function_agreement_validation.md).
- Supports responsible citation metrics that do not treat every citation edge as equivalent.

## Operationalization

- Define mutually interpretable function labels and written annotation guidelines.
- Require textual evidence for each non-neutral label when humans annotate citations.
- Store labels as edge attributes in citation graphs or as annotations on citation-context spans.
- Validate the taxonomy through inter-annotator agreement and downstream classifier performance.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) gives a 12-class citation-function scheme with roles such as weakness, contrast, basis, use, modification, motivation, similarity, support, and neutral description.
- Teufel et al. define citation function as the author's reason for citing and emphasize that annotators should only mark explicitly signaled functions.
- Their guidelines require annotators to identify textual evidence, increasing objectivity when labels depend on author intention.
- The paper reports that citation function is difficult to annotate because authors do not always state their purpose clearly, so neutral and insufficient-evidence categories are part of the taxonomy.
- The rarity and caution around explicitly negative functions are split out as [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md).

## Caveats

- Citation function labels are field- and discourse-dependent.
- A taxonomy may underrepresent implicit, sarcastic, or politically cautious citation roles.
- Many citations need neutral or insufficient-evidence labels because local text does not support a stronger inference.

## Links

- [citation contexts and functions](citation_contexts.md)
- [citation context windows](citation_context_windows.md)
- [citation function classification](../methods/citation_function_classification.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md)
- [citation sentiment-role projection](../methods/citation_sentiment_role_projection.md)
- [citation-function class imbalance](../validations/citation_function_class_imbalance.md)
- [citation-function agreement validation](../validations/citation_function_agreement_validation.md)
- [citation networks](citation_networks.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_function_taxonomies`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Aliases: citation role taxonomy; citation motivation labels; rhetorical citation taxonomy; typed citation labels
