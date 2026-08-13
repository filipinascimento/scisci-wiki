# Dominant-class science-linkage dilution

## Summary

Dominant-class science-linkage dilution is the validation caveat that aggregate patent science-linkage measures can be driven downward or upward by a high-volume technology class with different science reliance than smaller classes.

## Canonical Form

- Unit of analysis: patent corpus, IPC class, technology-class mix, science-citing patent share, or forward-citation contrast.
- Typical representation: aggregate SKAI versus class-specific SKAI, volume-weighted decomposition, or class-mix sensitivity table.
- Validation target: distinguish corpus-level science linkage from technology-class composition.
- Empirical signature: a dominant class contributes most patents but has lower or higher science linkage than specialized smaller classes.

## Uses in Science of Science

- Adds a class-mix guardrail to [IPC-class science linkage heterogeneity](../measures/ipc_class_science_linkage_heterogeneity.md).
- Helps interpret aggregate [scientific knowledge application index](../measures/scientific_knowledge_application_index.md) results.
- Connects class composition to [science application impact nonmonotonicity](science_application_impact_nonmonotonicity.md).
- Prevents country or organization differences from being attributed to institutions when they may reflect patent-class mix.

## Operationalization

- Report patent counts and science-linkage measures for each major technology class.
- Compare the corpus-wide aggregate with class-specific and class-standardized estimates.
- Recompute aggregate SKAI after excluding or reweighting the dominant class.
- Mark classes with small denominators separately when computing FCDI or other ratios.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) shows that the ten largest IPC classes cover almost all patents in their nano medical device panel.
- The dominant A61 medical/veterinary/hygiene class has a lower SKAI than some smaller classes, especially chemistry-related C07.
- Their class table also shows that science-citing patent impact premiums vary sharply by class, including classes where science-citing patents receive fewer forward citations.
- This pattern means aggregate science-linkage and impact measures can be diluted or reshaped by the dominant class mix.

## Caveats

- Dominance can be real and policy-relevant; dilution is a warning about interpretation, not a reason to discard the large class.
- Class-standardization can overcorrect if the research question concerns the actual corpus rather than equal-class comparisons.
- IPC classes are broad and may hide subclass-level science linkage.
- Multiple IPC assignments require an explicit counting rule.

## Links

- [IPC-class science linkage heterogeneity](../measures/ipc_class_science_linkage_heterogeneity.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [science application impact nonmonotonicity](science_application_impact_nonmonotonicity.md)
- [technological complexity science-linkage gradient](../mechanisms/technological_complexity_science_linkage_gradient.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [ratio-metric absolute-impact context](ratio_metric_absolute_impact_context.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology-The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `dominant_class_science_linkage_dilution`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: dominant IPC class dilution; class-mix SKAI dilution; technology-class composition caveat; patent class linkage dilution
