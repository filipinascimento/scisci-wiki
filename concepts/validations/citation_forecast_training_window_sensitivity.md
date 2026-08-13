# Citation forecast training-window sensitivity

## Summary

Citation forecast training-window sensitivity is the validation that long-term citation predictions depend on how much early citation history is used for model training.

## Canonical Form

- Unit of analysis: paper, training window, forecast horizon, prediction error, or citation model.
- Typical representation: forecast performance as a function of early-history length.
- Validation target: quantify how prediction uncertainty changes as more citation history becomes available.
- Empirical signature: longer training windows reduce forecast uncertainty or improve fit for ultimate impact.

## Uses in Science of Science

- Refines [citation prediction envelope coverage](citation_prediction_envelope_coverage.md).
- Supports [long-term citation prediction](../methods/long_term_citation_prediction.md).
- Links early citation accumulation to [citation immediacy parameter](../measures/citation_immediacy_parameter.md).
- Helps set responsible horizons for evaluative prediction.

## Operationalization

- Fit the citation model using multiple early-history windows.
- Predict long-term or ultimate citation impact at each window.
- Compare error, coverage, and uncertainty across training-window lengths.
- Report the shortest window that supports the intended forecast horizon.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) evaluates prediction using different amounts of early citation history.
- The paper shows that forecast accuracy improves as more citation observations are available.
- This validates the model while clarifying that early prediction has window-dependent uncertainty.

## Caveats

- Training-window sensitivity can differ across fields, citation tempos, and paper types.
- Early windows may miss delayed recognition or exogenous second acts.
- Better forecast accuracy does not make citation prediction appropriate for every assessment use.

## Links

- [citation prediction envelope coverage](citation_prediction_envelope_coverage.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [exogenous second-act citation shock](exogenous_second_act_citation_shock.md)
- [same-early-citation divergence](same_early_citation_divergence.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612]

## Metadata

- Concept ID: `citation_forecast_training_window_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation prediction training-window sensitivity; early-history forecast sensitivity; citation forecast window dependence; long-term impact prediction window check
