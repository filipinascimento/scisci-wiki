# OpenAlex concept classifier

## Summary

The OpenAlex concept classifier assigns works to a Wikidata-backed hierarchy of concepts using titles and abstracts, extending the MAG-derived field system into an open scholarly index.

## Canonical Form

- Unit of analysis: work, concept, concept hierarchy edge, classifier output, or paper-concept assignment.
- Typical representation: multilabel paper-concept table with concept IDs, hierarchy levels, and source snapshot.
- Method target: infer topical or disciplinary membership for works in an open scholarly graph.
- Empirical signature: works receive one or more concept assignments that can be linked to Wikidata and aggregated by hierarchy level.

## Uses in Science of Science

- Provides OpenAlex-specific infrastructure for [paper-field linkages](../representations/paper_field_linkages.md) and [field classifications](../measures/field_classifications.md).
- Supplies field/topic strata for citation normalization, topic dynamics, interdisciplinarity, and science-map overlays.
- Connects text-derived assignment to [topic models](topic_models.md), [document-topic mixtures](../representations/document_topic_mixtures.md), and [citation-free embedding inference](citation_free_embedding_inference.md).
- Links the current OpenAlex graph to the legacy [MAG publication backbone](../datasets/mag_publication_backbone.md) because the classifier and hierarchy are derived from MAG infrastructure.
- Requires [OpenAlex concept-assignment coverage audit](../validations/openalex_concept_assignment_coverage_audit.md) when unlabeled works could bias field, topic, or science-map conclusions.

## Operationalization

- Start from OpenAlex work titles and abstracts where available.
- Apply the OpenAlex concept model or use snapshot-provided concept assignments, preserving concept ID, display name, level, score if available, and snapshot date.
- Retain multi-concept assignments rather than forcing a single field unless the downstream measure requires it.
- Validate field-sensitive results against alternative classifications, journal categories, citation clusters, or expert labels.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) reports that OpenAlex concepts are Wikidata entities arranged in a hierarchy with 19 root-level concepts and five descendant layers.
- Priem et al. state that the concept tree is modified from Microsoft Academic Graph.
- The paper describes an automated classifier trained on the MAG corpus that assigns works to concepts using titles and abstracts, with code and models released as open source.
- Priem et al. report that around 85% of OpenAlex works have at least one concept assigned, which makes missing-concept coverage a required audit field.

## Caveats

- Concept assignments inherit MAG training data and hierarchy choices.
- Title/abstract availability varies by source, field, language, and time period.
- OpenAlex concepts are useful operational strata but should not be treated as fixed natural boundaries of science.

## Links

- [OpenAlex](../datasets/openalex.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [field classifications](../measures/field_classifications.md)
- [topic models](topic_models.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [citation-free embedding inference](citation_free_embedding_inference.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [OpenAlex concept-assignment coverage audit](../validations/openalex_concept_assignment_coverage_audit.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_concept_classifier`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex concepts; MAG-trained concept classifier; Wikidata concept hierarchy; title abstract classifier
