# Citation-model first-mover limit

## Summary

The citation-model first-mover limit is the validation failure where standard citation-dynamics models imply that papers must gain attention early to become highly cited, making late awakening hard to reproduce.

## Canonical Form

- Unit of analysis: citation-history model, paper citation trajectory, delayed-recognition candidate, or model residual.
- Typical representation: predicted citation curve, early-attention dependence, model outlier list, or delayed-recognition residual.
- Validation target: test whether a citation model can generate long dormant periods followed by intense late recognition.
- Empirical signature: the model predicts that papers without early citations will remain low impact, while observed papers awaken after decades.

## Uses in Science of Science

- Stress-tests [citation trajectory models](../methods/citation_trajectory_models.md) against [sleeping beauty](../mechanisms/sleeping_beauty.md) cases.
- Links [preferential attachment](../mechanisms/preferential_attachment.md), [cumulative advantage](../mechanisms/cumulative_advantage.md), aging, and paper fitness models to delayed-recognition validation.
- Supports [sleeping-beauty null-model gap](sleeping_beauty_null_model_gap.md) by naming the model-side reason simple baselines miss late awakenings.
- Gives responsible evaluation systems a caution: early citation silence does not always imply low eventual value.

## Operationalization

- Fit or simulate citation-history models with attachment, aging, and paper heterogeneity.
- Compare predicted and observed citation paths for high-[beauty coefficient](../measures/beauty_coefficient.md) papers.
- Flag cases where the model assigns very low future impact after a long early citation drought but the paper later awakens.
- Compare first-mover failures across fields, datasets, publication cohorts, and model specifications.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) states that delayed recognition cannot be predicted by current citation-dynamics models because they naturally lead to first-mover advantage.
- The paper argues that under such models papers either accumulate citations early or are unlikely to accumulate many citations later.
- Ke et al. compare empirical beauty-coefficient distributions with citation-network randomization and preferential-attachment baselines and find much narrower delayed-recognition ranges under the baselines.
- The validation does not reject all citation-history modeling; it identifies a class of late-awakening trajectories that need richer mechanisms such as field shifts, cross-disciplinary discovery, or changing use contexts.

## Caveats

- A model can fail on sleeping beauties but still forecast ordinary citation trajectories well.
- The limit depends on the model class and the constraints used in simulation.
- Delayed recognition can be rare enough that aggregate prediction scores hide first-mover failures.
- More complex models with topic shifts, field growth, and external trigger processes may reduce the gap.

## Links

- [citation trajectory models](../methods/citation_trajectory_models.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [sleeping-beauty null-model gap](sleeping_beauty_null_model_gap.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `citation_model_first_mover_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: first-mover citation-model failure; delayed-recognition model limit; early-attention model bias; sleeping-beauty prediction gap
