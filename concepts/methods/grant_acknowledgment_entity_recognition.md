# Grant-acknowledgment entity recognition

## Summary

Funding links can be inferred from explicit grant identifiers and from funder-name recognition in acknowledgment text.

## Canonical Form

- Unit of analysis: acknowledgment section, funder name, grant number, publication, grant, funder, or confidence score.
- Typical representation: entity-recognition pipeline for funding acknowledgments and grant links.
- Mechanism, measurement, or validation target: funding-output linkage through text and identifier extraction.
- Empirical signature: publication-to-funder links include both grant-level links and weaker funder-only attributions.

## Uses in Science of Science

- Refines funding-linkage methods by linking it to [funding acknowledgments](../datasets/funding_acknowledgments.md) and [grant acknowledgment output linkage](grant_acknowledgment_output_linkage.md).
- Useful as a reusable check when [funding acknowledgment misattribution bias](../validations/funding_acknowledgment_misattribution_bias.md) is used in science-of-science inference.
- Creates cross-links to [project funding source survey linkage](../datasets/project_funding_source_survey_linkage.md) so the motif is not interpreted in isolation.

## Operationalization

- Search acknowledgment sections for grant numbers, funder names, and funder-name variants.
- Separate explicit grant-level links from funder-only attributions.
- Record extraction source, confidence, and whether a standardized cross-funder grant identifier exists.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) reports using PubMed and acknowledgment mining to link publications to grants and to record funder attributions even without explicit grant IDs.
- The paper also notes the need for cross-funder grant identifiers and structured submission metadata.

## Caveats

- Funder-only recognition is weaker than grant-level linkage.
- Acknowledgment text can omit funders, include ambiguous names, or use nonstandard grant formats.

## Links

- [Funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [Grant-acknowledgment output linkage](grant_acknowledgment_output_linkage.md)
- [Funding-acknowledgment misattribution bias](../validations/funding_acknowledgment_misattribution_bias.md)
- [Project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [Sensitive grant-data deidentification pathway](sensitive_grant_data_deidentification_pathway.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `grant_acknowledgment_entity_recognition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: funder NER; grant-number mining; acknowledgment-based funding extraction
