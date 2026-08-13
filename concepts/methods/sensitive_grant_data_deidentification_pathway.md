# Sensitive grant-data deidentification pathway

## Summary

Sensitive grant-data deidentification pathway is the method motif that linked grant-demographic-career records require restricted raw access, disclosure controls, and planned public deidentified release.

## Canonical Form

- Unit of analysis: grant record, demographic linkage, restricted file, public-use file, disclosure review, or data-access pathway.
- Typical representation: Privacy Act protection, clearance requirement, linked administrative file, deidentified release, or restricted raw/public derived split.
- Method target: make sensitive administrative research auditable while protecting applicants.
- Empirical signature: a study uses protected linked records and describes clearance, restrictions, and deidentified dissemination.

## Uses in Science of Science

- Adds governance detail to [administrative demographic record linkage](administrative_demographic_record_linkage.md).
- Connects grant panels to [restricted raw public derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md).
- Supports reproducible use of [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md) without exposing private applicant records.

## Operationalization

- Document raw data sources, linkage keys, protected fields, access approvals, and disclosure controls.
- Provide deidentified derived files where possible.
- Keep small-cell suppression and subgroup aggregation decisions explicit.
- Separate reproducible code from nonpublic raw inputs.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) describes personal application records linked to doctoral and faculty data under Privacy Act protections and clearance requirements.
- The paper also refers to a deidentified data release, making data-access governance part of the study design.

## Caveats

- Deidentification can reduce subgroup detail and replicability.
- Restricted access can limit independent audit.
- Public derived files must be checked for disclosure risk and analytic sufficiency.

## Links

- [administrative demographic record linkage](administrative_demographic_record_linkage.md)
- [restricted raw public derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [sparse demographic subgroup-cell limit](../validations/sparse_demographic_subgroup_cell_limit.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `sensitive_grant_data_deidentification_pathway`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: restricted grant data release pathway; deidentified grant-demographic data; sensitive funding-data access governance
