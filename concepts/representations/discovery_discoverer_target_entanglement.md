# Discovery-discoverer target entanglement

## Summary

Predictions of discoveries and predictions of discoverers are coupled but analytically separable target classes.

## Canonical Form

- Unit of analysis: forecast target, discovery, discoverer, venue, time, place, or joint discovery-person event.
- Typical representation: target schema separating work, person, timing, venue, and location dimensions.
- Mechanism, measurement, or validation target: forecast target definition in science-of-science prediction.
- Empirical signature: a prediction claim mixes what will be discovered with who will make the discovery unless target classes are separated..

## Uses in Science of Science

- Refines [scientific discovery prediction](../methods/scientific_discovery_prediction.md).
- Adds a target-schema layer to [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md).
- Connects career models and paper-level forecast tasks.

## Operationalization

- Encode forecast unit as discovery, discoverer, venue, timing, or location.
- Require models to declare whether outputs concern the work, the person, or their joint event.
- Report performance separately for target dimensions when possible.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2017) frames prediction as knowing what will be discovered, by whom, when, and where, while noting that discovery and discoverer are difficult to separate.

## Caveats

- This is a target-schema motif, not an empirical result.
- Real prediction systems may still require joint modeling after target definitions are separated.

## Links

- [Scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md)
- [Prediction target aspect decomposition](../methods/prediction_target_aspect_decomposition.md)
- [Paper as discovery carrier](paper_as_discovery_carrier.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [Faculty-placement pedigree baseline](../validations/faculty_placement_pedigree_baseline.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `discovery_discoverer_target_entanglement`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: discovery-discoverer split; discoverer target coupling; joint discovery-person forecast
