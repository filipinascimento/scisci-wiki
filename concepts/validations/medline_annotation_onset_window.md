# MEDLINE annotation-onset window

## Summary

MEDLINE annotation-onset window is a corpus-validity check that trims or flags early years after a new indexing practice begins, so strategy estimates are not driven by database backfill or rollout artifacts.

## Canonical Form

- Unit of analysis: database year, annotation protocol, indexed article, entity annotation, model-estimation window, or sensitivity period.
- Typical representation: exclusion window, onset marker, backfill caveat, rolling-window distortion note, or pre/post annotation audit.
- Validation target: whether observed changes in entity networks reflect scientific behavior rather than the start of a metadata field.
- Empirical signature: early estimates near the annotation start are treated cautiously, delayed, or excluded before trend interpretation.

## Uses in Science of Science

- Provides a data-quality guardrail for [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md).
- Protects [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) construction from interpreting annotation rollout as knowledge growth.
- Supports [strategy-distribution stability](strategy_distribution_stability.md) and [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md) by clarifying which years are interpretable.
- Generalizes to OpenAlex, Dimensions, Web of Science, patent, policy, and full-text corpora whenever a field or source is introduced midstream.

## Operationalization

- Identify when the relevant annotation, identifier, entity extractor, or coverage rule began.
- Check whether earlier records were backfilled or only prospectively annotated.
- Exclude an initial window, down-weight early estimates, or report a visible onset marker.
- If model parameters use lagged histories, extend the caution period through the lag length.
- Report analyses with and without the onset years where feasible.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) states that NLM chemical annotations were introduced in 1980 and later applied to indexed journals.
- The same paper focuses its main biomedical-chemistry strategy analysis on 1983-2008 to limit effects from the introduction of indexing.
- Foster et al.'s figure note marks 1980 as the annotation introduction and warns that parameter estimates are distorted until 1987 because the model infers parameters from the six previous years.
- This makes the annotation-onset window a reusable validity motif for time-ordered scholarly knowledge graphs.

## Caveats

- Onset windows do not remove all historical coverage changes or manual indexing drift.
- Backfilled records may still differ from prospectively indexed records.
- Excluding early years can remove important historical variation, especially in small fields.

## Links

- [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [article coannotation edge expansion](../methods/article_coannotation_edge_expansion.md)
- [chemical-relationship persistence assumption](chemical_relationship_persistence_assumption.md)
- [strategy-distribution stability](strategy_distribution_stability.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `medline_annotation_onset_window`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: annotation rollout window; indexing onset sensitivity; MEDLINE chemical annotation start; annotation backfill caveat
