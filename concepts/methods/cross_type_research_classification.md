# Cross-type research classification

## Summary

Cross-type research classification assigns publications, grants, policy documents, clinical trials, patents, and other research objects to a shared field or topic scheme.

## Canonical Form

- Unit of analysis: research object, classification code, expert-defined search rule, machine-learning assignment, or cross-type category table.
- Typical representation: object ID plus field/category code, score, assignment method, and classification-system version.
- Method target: classify heterogeneous scholarly and translational objects with a common topic axis.
- Empirical signature: publications, grants, patents, trials, and policy records can be summarized with the same field categories rather than separate source-specific labels.

## Uses in Science of Science

- Gives [research-object context graphs](../representations/research_object_context_graphs.md) a common topical axis across object types.
- Extends [field classifications](../measures/field_classifications.md), [paper-field linkages](../representations/paper_field_linkages.md), and [OpenAlex concept classifier](openalex_concept_classifier.md) beyond publications.
- Supports field-normalized comparisons of funding, publication, patent, clinical, and policy activity in [Dimensions](../datasets/dimensions.md).
- Helps build [contextual analytics panels](../representations/contextual_analytics_panels.md) that compare search results by research category.

## Operationalization

- Define a classification system and persistent category IDs.
- Build expert search-term rules or training corpora for each category.
- Extract concepts from returned objects, boost or exclude terms, and convert the final expert judgment into reproducible rules.
- Apply the same classification procedure to all supported object types and store score, version, and snapshot date.
- Validate against source-native field labels, journal categories, expert samples, citation clusters, or manual audits.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that journal-level categorization was not sufficient for Dimensions because journal objects are only one part of the information graph.
- Hook et al. argue that Dimensions needed to classify publications, grants, policy papers, clinical trials, and patents using a common approach.
- The paper describes standardized and reproducible subject categorization using an algorithmic machine-learning approach with expert-built search terms, term boosting, and term exclusion.
- Hook et al. frame this as a way to remove inconsistent one-off human classification decisions while still allowing experts to define fields in a computable form.

## Caveats

- Common categories can hide object-specific meanings: a field label may mean different things for a grant, patent, trial, or paper.
- Expert search rules and machine-learning assignments can become stale as terminology changes.
- Field-sensitive metrics should report classification system, version, and sensitivity to alternative field maps.

## Links

- [Dimensions](../datasets/dimensions.md)
- [field classifications](../measures/field_classifications.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [OpenAlex concept classifier](openalex_concept_classifier.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [contextual analytics panels](../representations/contextual_analytics_panels.md)
- [field classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `cross_type_research_classification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: cross-object classification; Dimensions subject mapping; multi-entity field classification; common research category axis
