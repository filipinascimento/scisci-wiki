# Published trace feedback loop

## Summary

The published trace feedback loop is the mechanism by which the visible literature both records past research choices and shapes the future experiments scientists choose.

## Canonical Form

- Unit of analysis: publication, experiment, knowledge-network edge, failure, or candidate problem.
- Typical representation: observed published edges used as the state variable for future problem choice.
- Mechanism: scientists search using the published record, but that record is a biased sample of attempted research.
- Empirical signature: published successes guide future local search while unpublished failures and unattempted edges remain invisible.

## Uses in Science of Science

- Connects [knowledge-network experiment search](knowledge_network_experiment_search.md) to publication bias.
- Explains why [unpublished-failure censoring](../validations/unpublished_failure_censoring.md) affects collective discovery.
- Supports [failed-experiment publication value](failed_experiment_publication_value.md) and [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md).
- Generalizes to citation, dataset, and patent traces used as inputs for scientific decision-making.

## Operationalization

- Treat the published literature as the observed state of the knowledge network.
- Separate observed positive edges from attempted but unpublished negative or null results when possible.
- Model how future choices depend on the visible network, including degree, distance, and component structure.
- Simulate how publishing failures would alter future search paths and reduce duplicate attempts.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) argues that scientists choose experiments using information from the existing literature.
- The paper also emphasizes that failed experiments are rarely published, even though they contain useful information for collective search.
- The resulting feedback loop means the public knowledge network is both a guide and a biased record.

## Caveats

- Some unpublished failures circulate informally through labs, conferences, or private networks.
- Literature traces also omit tacit knowledge, tooling constraints, and negative feasibility judgments.
- Publishing all failures has costs and requires coordination to keep the signal usable.

## Links

- [knowledge-network experiment search](knowledge_network_experiment_search.md)
- [failed-experiment publication value](failed_experiment_publication_value.md)
- [unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `published_trace_feedback_loop`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: literature trace feedback; published record search feedback; publication-biased experiment feedback
