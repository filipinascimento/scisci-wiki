# Topic trend slope

## Summary

Topic trend slope measures whether a latent topic's prevalence is rising or falling over time in a document corpus.

## Canonical Form

- Unit of analysis: topic, year, document-topic vector, corpus time slice, or temporal trend.
- Typical representation: linear slope of yearly topic prevalence, hot/cold topic ranking, or topic prevalence time series.
- Measurement target: identify emerging, declining, or stable semantic themes in scientific text.
- Empirical signature: topics with large positive slopes are "hot" and topics with large negative slopes are "cold" within the selected corpus and period.

## Uses in Science of Science

- Gives a compact measure for [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md).
- Provides a text-based complement to citation-based [research fronts](../mechanisms/research_fronts.md) and [field emergence](../mechanisms/field_emergence.md).
- Can prioritize concept-page expansion by surfacing rising topics in abstracts, full text, grants, policy documents, or citation contexts.
- Should be interpreted alongside [topic-number model selection](../methods/topic_number_model_selection.md) and [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md).

## Operationalization

- Fit a topic model on a corpus with publication years or other timestamps.
- Estimate each document's topic mixture.
- Aggregate topic prevalence by year or time bin.
- Fit a linear trend or another explicit temporal model to each topic's prevalence series.
- Rank topics by positive and negative trend strength, then inspect top words and representative documents.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) analyzes PNAS abstracts from 1991 to 2001 and computes temporal dynamics of inferred topics.
- The paper defines the three hottest and three coldest topics as those with the strongest positive and negative linear trends over the period.
- Griffiths and Steyvers show the top words for these rising and falling topics, using them to interpret changes in scientific attention.
- The article frames topic trends as a way to identify "hot topics" in science automatically from text.

## Caveats

- Linear slopes can miss bursts, plateaus, terminology substitutions, and nonlinear field life cycles.
- Topic prevalence is corpus-relative; a hot PNAS topic may not be hot across all science.
- Trend stability depends on topic identity, vocabulary preprocessing, topic count, and time-window selection.

## Links

- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [topic models](../methods/topic_models.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [field emergence](../mechanisms/field_emergence.md)
- [research fronts](../mechanisms/research_fronts.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_trend_slope`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: hot-topic slope; cold-topic slope; topic linear trend; topic prevalence trend
