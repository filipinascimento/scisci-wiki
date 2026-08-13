# Semantic bundle trend detection

## Summary

Semantic bundle trend detection finds rising or declining scientific themes by tracking coherent topic-word bundles instead of isolated word frequencies.

## Canonical Form

- Unit of analysis: topic, semantic word bundle, document-topic mixture, field, or time window.
- Typical representation: topic-level prevalence series with representative words and example documents.
- Method target: detect scientific trends as changes in coherent semantic content.
- Empirical signature: semantically related terms and documents rise or fall together across publication years.

## Uses in Science of Science

- Refines [topic prevalence dynamics](topic_prevalence_dynamics.md) by emphasizing coherent word-document bundles.
- Produces trend evidence for [research fronts](../mechanisms/research_fronts.md) and [field emergence](../mechanisms/field_emergence.md).
- Supports compact ranking through [topic trend slope](../measures/topic_trend_slope.md).
- Can be validated with [external milestone trend validation](../validations/external_milestone_trend_validation.md).

## Operationalization

- Fit a topic model to titles, abstracts, or full text.
- Label topics from top words and high-probability documents.
- Aggregate document-topic weights by year or period.
- Rank topics by slopes, changes, or peak patterns.
- Inspect whether the whole semantic bundle changes coherently rather than a single term driving the trend.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) tracks hot and cold topics in PNAS abstracts over 1991-2001.
- The paper interprets trends through topic word lists and representative documents rather than isolated keywords.
- The trend examples connect topic growth to recognizable scientific developments, showing how semantic bundles can become longitudinal evidence.
- This approach links topic-model representation choices to science-of-science claims about attention and emergence.

## Caveats

- A bundle can drift semantically while retaining the same label.
- Topic trends are sensitive to vocabulary pruning, model count, and corpus boundaries.
- Trend detection should separate real field growth from terminology substitution or publication-volume changes.

## Links

- [topic prevalence dynamics](topic_prevalence_dynamics.md)
- [topic trend slope](../measures/topic_trend_slope.md)
- [topic models](topic_models.md)
- [research fronts](../mechanisms/research_fronts.md)
- [field emergence](../mechanisms/field_emergence.md)
- [external milestone trend validation](../validations/external_milestone_trend_validation.md)
- [topic assignment tagging](topic_assignment_tagging.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `semantic_bundle_trend_detection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: topic-bundle trends; semantic topic trend detection; coherent word-bundle dynamics; latent theme trend detection
