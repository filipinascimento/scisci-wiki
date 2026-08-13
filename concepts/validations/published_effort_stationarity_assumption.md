# Published-effort stationarity assumption

## Summary

Published-effort stationarity assumption is the validation requirement that changes in published research choices track changes in attempted research effort, rather than changes in failure, publication, or selection rates.

## Canonical Form

- Unit of analysis: attempted experiment, published experiment, strategy class, field-year, knowledge-network edge, or publication pipeline.
- Typical representation: near-stationary censoring assumption, effort-to-publication mapping, selection-stability caveat, or published-record denominator audit.
- Validation target: whether trends in observed published choices can be interpreted as trends in underlying scientific choices.
- Empirical signature: risky-strategy publication probabilities do not change enough over time to reverse the observed strategy trend.

## Uses in Science of Science

- Sharpens [unpublished-failure censoring](unpublished_failure_censoring.md) for time-trend interpretation.
- Links [publication-conditioned SciSci blind spot](publication_conditioned_scisci_blind_spot.md) to models of [scientific problem choice](../mechanisms/scientific_problem_choice.md).
- Provides a caveat for [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md) and other inferred-strategy models.
- Helps decide when published-record conservatism reflects researcher preference versus increasing failure or publication barriers for risky projects.

## Operationalization

- State whether strategy trends are inferred from published records, attempted experiments, proposals, or submissions.
- Identify strategy-specific censoring mechanisms such as experimental failure, non-submission, rejection, negative results, or proprietary withholding.
- Test whether risky strategies become less publishable over time using proposal records, preprints, failed-experiment registries, or field surveys when available.
- Perform sensitivity analysis over plausible strategy-specific publication probabilities.
- Avoid treating publication counts as direct effort counts unless the selection process is argued to be well behaved and near stationary.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky, Foster, Foster, and Evans (2015) states that their interpretation assumes published research reflects the underlying distribution of research effort in a relatively undistorted way.
- The authors explicitly note an alternative explanation: scientists might pursue risky projects with similar intensity over time, while fewer risky projects succeed and are published in later periods.
- They frame their interpretation as requiring that risky strategies do not become much riskier over time and that selection through failure and publication remains well behaved and near stationary.
- Under those assumptions, observed published strategy distributions and inferred parameters can track unobserved research effort and scientific choice.

## Caveats

- The assumption is difficult to verify from publication data alone.
- Strategy-specific failure and rejection rates can change with field maturity, instrumentation, regulation, or journal standards.
- Stationarity can hold approximately for some strategy classes and fail for others.
- Surveys and proposal datasets help but may still miss abandoned or proprietary work.

## Links

- [unpublished-failure censoring](unpublished_failure_censoring.md)
- [publication-conditioned SciSci blind spot](publication_conditioned_scisci_blind_spot.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [scientific problem choice](../mechanisms/scientific_problem_choice.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803]

## Metadata

- Concept ID: `published_effort_stationarity_assumption`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: effort publication stationarity; published-record effort assumption; near-stationary censoring; strategy trend selection assumption
