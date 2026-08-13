# Disruption title-action-word diagnostic

## Summary

Title and abstract language can serve as a text-side diagnostic for disruption versus development.

## Canonical Form

- Unit of analysis: title/abstract token, disruption sign, field, and year.
- Typical representation: token frequency ratio for disruptive versus developing papers.
- Validation target: whether citation-network disruption aligns with linguistic signals.
- Empirical signature: disruptive work overuses tool/action/question language while developing work overuses theory/model/confirmation language.

## Uses in Science of Science

- Adds textual validation to [disruption measure validation](disruption_measure_validation.md).
- Connects network disruption to [disruptive language shift](disruptive_language_shift.md).
- Useful for detecting whether citation-network scores capture interpretable research modes.

## Operationalization

- Compute field/year-normalized token or part-of-speech ratios by disruption sign.
- Validate against citation-network disruption, eponymous predecessor signals, and topic controls.
- Use language as a diagnostic rather than as a standalone evaluation metric.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) compares token frequency ratios in millions of Web of Science titles and abstracts split by positive versus negative disruption.
- The analysis links disruption scores to interpretable word-use patterns.

## Caveats

- Language varies by field, era, and genre.
- Once used as a target, linguistic diagnostics can be gamed.

## Links

- [Disruption measure validation](disruption_measure_validation.md)
- [Disruptive language shift](disruptive_language_shift.md)
- [Eponymous prior-work extension signal](eponymous_prior_work_extension_signal.md)
- [Title word diversity](../measures/title_word_diversity.md)
- [Citation tense-voice-modality features](../representations/citation_tense_voice_modality_features.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `disruption_title_action_word_diagnostic`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: disruption language diagnostic; title action-word disruption check; disruptive versus developmental word ratio
