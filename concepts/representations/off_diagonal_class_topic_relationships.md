# Off-diagonal class-topic relationships

## Summary

Off-diagonal class-topic relationships use non-dominant cells in a class-by-topic matrix as evidence of semantic overlap among scientific classes.

## Canonical Form

- Unit of analysis: external class, topic, class-topic matrix cell, or pair of classes.
- Typical representation: off-diagonal heat-map cells, shared diagnostic topics, or row similarity among class-topic profiles.
- Representation target: relations among fields that are not captured by a one-class-per-paper label.
- Empirical signature: a topic selected as diagnostic for one class also appears with substantial weight in other classes.

## Uses in Science of Science

- Extends [topic-class profile matrix](topic_class_profile_matrix.md) beyond diagonal class recovery.
- Gives a text-based way to inspect overlap behind [field classifications](../measures/field_classifications.md).
- Helps interpret [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md) without assuming that off-diagonal structure is error.
- Supports [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md) when shared topics connect otherwise separate classes.

## Operationalization

- Estimate document-topic mixtures and average them inside external classes.
- Select diagnostic or interpretable topics for the display.
- Inspect off-diagonal cells and row similarities for shared method, organism, problem, or theory topics.
- Compare off-diagonal patterns with citation maps, co-classification, or expert field knowledge.
- Distinguish substantive overlap from generic or artifact topics.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) interprets off-diagonal entries in PNAS class-topic displays as relationships between classes.
- The paper notes similarities among Ecology and Evolution, Applied Mathematics, Statistics, and Social Sciences, and other related class groupings.
- This use turns a validation display into a representation of field relationships rather than a simple correctness matrix.
- The interpretation depends on topic semantic quality and the reliability of external PNAS class labels.

## Caveats

- Off-diagonal cells can arise from noisy topics, generic language, or small class sizes.
- A high cell does not identify the causal direction of field influence.
- External class systems can be editorially constructed and may not match working research communities.

## Links

- [topic-class profile matrix](topic_class_profile_matrix.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md)
- [field classifications](../measures/field_classifications.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [topic semantic artifact caveat](../validations/topic_semantic_artifact_caveat.md)
- [small-category topic-profile instability](../validations/small_category_topic_profile_instability.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `off_diagonal_class_topic_relationships`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: off-diagonal topic structure; class-topic overlap; topic-class relationship cells; field overlap topic cells
